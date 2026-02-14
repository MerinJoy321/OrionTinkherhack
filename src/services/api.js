const workers = [
    { id: 1, name: "Rahul Kumar", skill: "Electrician", experience: 5, rate: 800, image: "/default-avatar.svg", rating: 4.8, location: "Andheri, Mumbai", distance: 2.5, available: true },
    { id: 2, name: "Arjun Das", skill: "Plumber", experience: 3, rate: 600, image: "/default-avatar.svg", rating: 4.2, location: "Bandra, Mumbai", distance: 5.0, available: true },
    { id: 3, name: "Suresh Nair", skill: "Carpenter", experience: 7, rate: 900, image: "/default-avatar.svg", rating: 4.9, location: "Dadar, Mumbai", distance: 1.2, available: false },
    { id: 4, name: "Manoj Singh", skill: "Painter", experience: 4, rate: 700, image: "/default-avatar.svg", rating: 4.5, location: "Juhu, Mumbai", distance: 3.8, available: true },
    { id: 5, name: "Vikram R", skill: "Electrician", experience: 2, rate: 500, image: "/default-avatar.svg", rating: 4.0, location: "Powai, Mumbai", distance: 8.0, available: true },
];

export function getWorkers() {
    return workers;
}

export function getWorkerById(id) {
    return workers.find((w) => w.id == id);
}
