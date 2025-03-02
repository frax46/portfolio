// Add testing library jest-dom matchers
import '@testing-library/jest-dom';
import React from 'react';

// Add TypeScript declarations
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeVisible(): R;
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
}

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    query: {},
    pathname: '',
  }),
}));

// Mock next/image since it doesn't work in Jest environment
jest.mock('next/image', () => {
  const mockImage = jest.fn().mockImplementation((props: any) => {
    return {
      type: 'img',
      props: {
        ...props,
        alt: props.alt || 'Image',
      },
    };
  });
  
  // @ts-ignore - displayName for component identification
  mockImage.displayName = 'Image';
  return { __esModule: true, default: mockImage };
});

// Mock framer-motion
jest.mock('framer-motion', () => {
  const mockComponent = (type: string) => {
    return jest.fn().mockImplementation((props: any) => {
      return {
        type,
        props: {
          ...props,
        },
      };
    });
  };
  
  return {
    motion: {
      div: mockComponent('div'),
      nav: mockComponent('nav'),
      span: mockComponent('span'),
      section: mockComponent('section'),
      article: mockComponent('article'),
      footer: mockComponent('footer'),
      li: mockComponent('li'),
    },
    AnimatePresence: jest.fn().mockImplementation((props: any) => {
      return {
        type: 'AnimatePresence',
        props,
      };
    }),
    useScroll: jest.fn().mockImplementation(() => ({
      scrollYProgress: {
        current: 0,
        get: () => 0,
        set: () => {},
        onChange: () => () => {},
      }
    })),
    useTransform: jest.fn().mockImplementation((input, inputRange, outputRange) => ({
      current: outputRange[0],
      get: () => outputRange[0],
      set: () => {},
      onChange: () => () => {},
    })),
  };
});

// Mock window.scrollTo
window.scrollTo = jest.fn();

// Mock IntersectionObserver
class MockIntersectionObserver {
  callback: any;
  root = null;
  rootMargin = '';
  thresholds = [0];
  
  constructor(callback: any) {
    this.callback = callback;
  }
  
  observe() {
    return null;
  }
  
  unobserve() {
    return null;
  }
  
  disconnect() {
    return null;
  }
  
  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver; 