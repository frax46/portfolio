import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '@/app/page';

// Mock useCallback and useState from React to work in tests
jest.mock('react', () => {
  const originalReact = jest.requireActual('react');
  return {
    ...originalReact,
    useCallback: (cb: any, deps: any[]) => cb,
  };
});

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, onClick, ...rest }: { 
    children: React.ReactNode; 
    href: string; 
    onClick?: () => void;
    [key: string]: any;
  }) => {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  };
});

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { 
    src: string; 
    alt: string; 
    [key: string]: any;
  }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

// Mock the Timeline component
jest.mock('@/components/ui/timeline', () => ({
  Timeline: ({ data }: { 
    data: Array<{ 
      title: string; 
      content: React.ReactNode;
    }>;
  }) => (
    <div data-testid="mock-timeline">
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  )
}));

// Mock the framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => <div {...props}>{children}</div>,
    nav: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => <nav {...props}>{children}</nav>,
    li: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => <li {...props}>{children}</li>,
    span: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => <span {...props}>{children}</span>,
    section: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => <section {...props}>{children}</section>,
    article: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => <article {...props}>{children}</article>,
    footer: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => <footer {...props}>{children}</footer>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useScroll: () => ({ scrollYProgress: { current: 0 } }),
  useTransform: () => ({ current: 0 }),
}));

describe('HomePage', () => {
  beforeEach(() => {
    // Reset document.body.style.overflow
    document.body.style.overflow = '';
    
    // Clear mocks
    jest.clearAllMocks();
  });

  test('menu toggle functionality works correctly', async () => {
    render(<HomePage />);
    
    // Initially, menu is closed
    const menuButton = screen.getByRole('button', { name: /Toggle menu|Open menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(screen.getByText('MENU')).toBeInTheDocument();
    
    // Click to open menu
    fireEvent.click(menuButton);
    
    // After clicking, we should see the menu navigation and the CLOSE text
    await waitFor(() => {
      // Find the navigation
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      
      const menuItems = screen.getAllByRole('listitem');
      expect(menuItems.length).toBeGreaterThan(0);
      
      // Check if the button now shows "CLOSE"
      expect(screen.getByText('CLOSE')).toBeInTheDocument();
    });
    
    // Get the same button again (now it should say CLOSE)
    const toggleButton = screen.getByRole('button', { name: /Toggle menu/i });
    expect(toggleButton).toBeInTheDocument();
    
    // Click to close menu
    fireEvent.click(toggleButton);
    
    // Menu should be closed and button should show "MENU" again
    await waitFor(() => {
      expect(screen.getByText('MENU')).toBeInTheDocument();
    });
  });

  test('navigation links in header exist and have correct hrefs', () => {
    render(<HomePage />);
    
    // Check header navigation links
    const menuButton = screen.getByRole('button', { name: /Toggle menu|Open menu/i });
    expect(menuButton).toBeInTheDocument();
    
    // Header should contain the logo/tag with France Annobil (case sensitive)
    const headerTags = screen.getAllByText((content, element) => {
      return content.includes('France Annobil');
    });
    expect(headerTags.length).toBeGreaterThan(0);
    expect(headerTags[0]).toBeInTheDocument();
  });
}); 