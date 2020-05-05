const data = {
  1: {
    name: 'Admin',
    description: 'Description of admin role',
    collectionTypes: [
      {
        name: 'article',
        permissions: {
          create: true,
          read: true,
          update: true,
          delete: true,
        },
      },
    ],
  },
  2: {
    name: 'Editor',
    description: 'Description of editor role',
    collectionTypes: [
      {
        name: 'article',
        permissions: {
          create: true,
          read: true,
          update: true,
          delete: true,
        },
      },
    ],
  },
  3: {
    name: 'Editor',
    description: 'Description of editor role',
    collectionTypes: [
      {
        name: 'article',
        permissions: {
          create: true,
          read: false,
          update: false,
          delete: false,
        },
      },
    ],
  },
  new: {
    name: '',
    description: '',
    collectionTypes: [
      {
        name: 'article',
        permissions: {
          create: false,
          read: false,
          update: false,
          delete: false,
        },
      },
    ],
  },
};

export default data;
