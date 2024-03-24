import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";


/**
 * @jest-environment jsdom
 */

describe('Pagination Component', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
    onPrevPage: jest.fn(),
    onNextPage: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with correct page numbers', () => {
    const { getByText } = render(<Pagination {...defaultProps} />);
    
    // maxPagesToShow is 5 and currentPage is 1, so it should render page numbers 1 to 5.
    for (let i = 1; i <= 5; i++) {
      expect(getByText(i.toString())).toBeTruthy();
    }
  });

  it('calls onPageChange when a page button is clicked', () => {
    const { getByText } = render(<Pagination {...defaultProps} />);

    fireEvent.click(getByText('2'));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);

    fireEvent.click(getByText('5'));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(5);
  });

  it('calls onPrevPage when the "Previous" button is clicked when its not the first page', () => {
    const { getByText } = render(<Pagination {...defaultProps} currentPage={2} />);

    fireEvent.click(getByText('Previous'));
    expect(defaultProps.onPrevPage).toHaveBeenCalled();
  });

  it('disables the "Previous" button on the first page ', () => {
    const { getByText } = render(<Pagination {...defaultProps} />);

    fireEvent.click(getByText('Previous'));
    expect(defaultProps.onPrevPage).not.toHaveBeenCalled();
    
  });

  it('calls onNextPage when the "Next" button is clicked when its not the last page', () => {
    const { getByText } = render(<Pagination {...defaultProps} currentPage={5} />);

    fireEvent.click(getByText('Next'));
    expect(defaultProps.onNextPage).toHaveBeenCalled();
  });

  it('disables the "Next" button on the last page', () => {
    const { getByText } = render(<Pagination {...defaultProps} currentPage={10} />);
    const nextButton = getByText('Next');
    
    fireEvent.click(nextButton); // Make sure the click event doesn't trigger.
    expect(defaultProps.onNextPage).not.toHaveBeenCalled();
  });
});
