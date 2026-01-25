// Local Order System (No Firebase)
const STORAGE_KEYS = {
    ORDERS_DB: 'bigbos_orders_db'
};

const orderEvents = new EventTarget();

function getOrders() {
    const data = localStorage.getItem(STORAGE_KEYS.ORDERS_DB);
    return data ? JSON.parse(data) : [];
}

function saveOrdersToStorage(orders) {
    localStorage.setItem(STORAGE_KEYS.ORDERS_DB, JSON.stringify(orders));
    orderEvents.dispatchEvent(new CustomEvent('orders-updated'));
}

function initOrderListener(onUpdate) {
    // Initial call
    let orders = getOrders();

    // MIGRATION: Check for legacy data
    const legacyData = localStorage.getItem('order_history');
    if (legacyData && orders.length === 0) {
        try {
            const legacyOrders = JSON.parse(legacyData);
            if (legacyOrders.length > 0) {
                // Migrate them
                orders = legacyOrders.map(o => ({
                    ...o,
                    status: (o.status === 'รอตรวจสอบ') ? 'pending' : (o.status === 'ยกเลิกแล้ว') ? 'cancelled' : o.status,
                    createdAt: new Date().toISOString() // Approximate
                }));
                saveOrdersToStorage(orders);
                // Optional: Clear legacy? localStorage.removeItem('order_history');
                // Keeping it for safety for now
            }
        } catch (e) {
            console.error("Migration failed:", e);
        }
    }

    onUpdate(orders);

    // Listener
    const handler = () => {
        onUpdate(getOrders());
    };
    orderEvents.addEventListener('orders-updated', handler);

    return () => {
        orderEvents.removeEventListener('orders-updated', handler);
    };
}

async function placeOrder(orderData) {
    await new Promise(r => setTimeout(r, 800)); // Simulate network

    const orders = getOrders();
    const newOrder = {
        ...orderData,
        id: 'ORD-' + Date.now().toString().slice(-6),
        status: 'pending', // pending, paid, shipped, completed, cancelled
        createdAt: new Date().toISOString()
    };

    // Add to beginning of list
    orders.unshift(newOrder);
    saveOrdersToStorage(orders);

    return newOrder;
}

async function updateOrderStatus(orderId, newStatus) {
    await new Promise(r => setTimeout(r, 500));

    const orders = getOrders();
    const index = orders.findIndex(o => o.id === orderId);

    if (index !== -1) {
        orders[index].status = newStatus;
        orders[index].updatedAt = new Date().toISOString();
        saveOrdersToStorage(orders);
    } else {
        throw new Error('Order not found');
    }
}

function getOrdersByUser(username) {
    const orders = getOrders();
    return orders.filter(o => o.user === username);
}

export { initOrderListener, placeOrder, updateOrderStatus, getOrdersByUser, getOrders };
