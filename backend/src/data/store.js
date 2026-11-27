const store = {
  posts: [
    {
      id: 1,
      title: "Welcome to CommunityHub",
      content: "This is our first community post.",
      author: "Rodricks",
      createdAt: new Date().toISOString(),
      likes: 0,
    },
  ],

  users: [
    {
      id: 1,
      name: "Rodricks Okoyo",
      email: "rodricks@example.com",
    },
    {
      id: 2,
      name: "Wilfred Mutuma",
      email: "wilfred@example.com",
    },
  ],

  nextId: 2,
};

module.exports = store;
