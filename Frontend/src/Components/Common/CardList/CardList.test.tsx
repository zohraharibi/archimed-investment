// import { fireEvent, render, waitFor } from '@testing-library/react';
// import CardList from './CardList';

// describe('CardList', () => {
//   const fetchItems = jest.fn();
//   const defaultProps = {
//     fetchItems,
//     itemsPerPage: 10,
//     title: 'Test Title',
//   };

//   it('fetches data and renders the title and total items count', async () => {
//     const totalItems = 20;
//     fetchItems.mockResolvedValueOnce({ data: [], totalItems });
//     const { findByText } = render(<CardList {...defaultProps} />);

//     await waitFor(() => expect(fetchItems).toHaveBeenCalled());

//     const titleElement = await findByText('Test Title');
//     const totalItemsElement = await findByText(`${totalItems} results`);

//     expect(titleElement).toBeTruthy();
//     expect(totalItemsElement).toBeTruthy();

//     // Extract the number from the total items element
//     const totalItemsText = totalItemsElement.textContent?.trim();

//     // Test if the extracted number matches the expected total items
//     if (totalItemsText) {
//       const totalItemsNumber = parseInt(totalItemsText, 10);
//       expect(totalItemsNumber).toEqual(totalItems);
//     }
//   });

//   it('renders the spinner initially', () => {
//     const { container } = render(<CardList {...defaultProps} />);
//     const spinnerElement = container.getElementsByClassName('spinner')[0];
//     expect(spinnerElement).toBeTruthy();
//   });
  

//   it('renders the search input after loading', async () => {
//     const { getByPlaceholderText, container } = render(<CardList {...defaultProps} />);
//     await waitFor(() => expect(container.getElementsByClassName('spinner')[0]).toBeUndefined());
//     expect(getByPlaceholderText('Search...')).toBeTruthy();
//   });
  
//   it('handles search change correctly', async () => {
//     const { getByPlaceholderText, container } = render(<CardList {...defaultProps} />);
//     await waitFor(() => expect(container.getElementsByClassName('spinner')[0]).toBeUndefined());

//     const searchInput = getByPlaceholderText('Search...');

//     fireEvent.change(searchInput, { target: { value: 'new query' } });

//     expect(fetchItems).toHaveBeenCalledWith(1, defaultProps.itemsPerPage, 'new query');
//   });


// });
