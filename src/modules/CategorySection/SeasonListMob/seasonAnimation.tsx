const imgAnimEven = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: [0, 0.5, 1],
  }
};

const imgAnimOdd = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: [0, 0.5, 1],
  }
};

const textAnimEven = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: {
    x: [0, 20, 0],
    opacity: 1,
  }
};

const textAnimOdd = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: {
    x: [0, -20, 0],
    opacity: 1,
  }
};

export { imgAnimEven, imgAnimOdd, textAnimEven, textAnimOdd };
