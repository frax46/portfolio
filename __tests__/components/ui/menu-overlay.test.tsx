import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MenuOverlay } from '@/components/ui/menu-overlay';

// Mock the Link component so we don't need Next's router context
jest.mock('next/link', () => {
  return ({ children, href, onClick }: { children: React.ReactNode, href: string, onClick?: () => void }) => {
    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  };
});

// Mock the framer-motion hooks
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
    nav: ({ children, ...props }: { children: React.ReactNode }) => <nav {...props}>{children}</nav>,
    li: ({ children, ...props }: { children: React.ReactNode }) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('MenuOverlay Component', () => {
  beforeEach(() => {
    // Reset the body overflow style before each test
    document.body.style.overflow = '';
  });

  test('renders the menu button with "MENU" text initially', () => {
    render(<MenuOverlay />);
    
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(screen.getByText('MENU')).toBeInTheDocument();
  });

  test('toggles menu open and closed when clicking the button', async () => {
    render(<MenuOverlay />);
    
    // Find the menu overlay container
    const homeElement = screen.getByText('HOME');
    const navElement = homeElement.closest('nav');
    expect(navElement).not.toBeNull();
    
    const parentElement = navElement?.parentElement;
    expect(parentElement).not.toBeNull();
    
    const menuOverlay = parentElement?.parentElement;
    expect(menuOverlay).not.toBeNull();
    
    // Check if the menu overlay is initially hidden
    expect(menuOverlay).toHaveClass('opacity-0');
    expect(menuOverlay).toHaveClass('pointer-events-none');
    
    // Click to open menu
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);
    
    // Menu items should now be visible
    await waitFor(() => {
      expect(menuOverlay).toHaveClass('opacity-100');
      expect(menuOverlay).not.toHaveClass('pointer-events-none');
    });
    
    // Button text should change to "CLOSE"
    expect(screen.getByText('CLOSE')).toBeInTheDocument();
    
    // Body should have overflow: hidden when menu is open
    expect(document.body.style.overflow).toBe('hidden');
    
    // Click to close menu
    const closeButton = screen.getByRole('button', { name: /close menu/i });
    fireEvent.click(closeButton);
    
    // Menu button should now say "MENU" again
    await waitFor(() => {
      expect(screen.getByText('MENU')).toBeInTheDocument();
    });
    
    // Body overflow should be reset
    expect(document.body.style.overflow).toBe('unset');
    
    // Menu overlay should be hidden again
    await waitFor(() => {
      expect(menuOverlay).toHaveClass('opacity-0');
      expect(menuOverlay).toHaveClass('pointer-events-none');
    });
  });

  test('closes menu when clicking a navigation link', async () => {
    render(<MenuOverlay />);
    
    // Find the menu overlay container
    const homeElement = screen.getByText('HOME');
    const navElement = homeElement.closest('nav');
    expect(navElement).not.toBeNull();
    
    const parentElement = navElement?.parentElement;
    expect(parentElement).not.toBeNull();
    
    const menuOverlay = parentElement?.parentElement;
    expect(menuOverlay).not.toBeNull();
    
    // Open the menu
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);
    
    // Wait for menu to open
    await waitFor(() => {
      expect(menuOverlay).toHaveClass('opacity-100');
      expect(menuOverlay).not.toHaveClass('pointer-events-none');
    });
    
    // Click a navigation link
    const homeLink = screen.getByText('HOME');
    fireEvent.click(homeLink);
    
    // Menu should close and button should show "MENU" again
    await waitFor(() => {
      expect(screen.getByText('MENU')).toBeInTheDocument();
    });
    
    // Menu overlay should be hidden again
    await waitFor(() => {
      expect(menuOverlay).toHaveClass('opacity-0');
      expect(menuOverlay).toHaveClass('pointer-events-none');
    });
  });
}); 