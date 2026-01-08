let users = [
  { id: 1, name: "Admin User", email: "admin@test.com", role: "admin" },
  { id: 2, name: "Normal User", email: "user@test.com", role: "user" }
];

// GET /health
exports.healthCheck = (req, res) => {
  res.status(200).json({ status: "ok" });
};

// GET /users (with query params)
exports.getUsers = (req, res) => {
  const { role } = req.query;

  if (role) {
    const filteredUsers = users.filter(u => u.role === role);
    return res.status(200).json(filteredUsers);
  }

  res.status(200).json(users);
};

// GET /users/:id (route param)
exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

// POST /users
exports.createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: role || "user"
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

