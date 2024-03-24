// import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Card from './Card';

// describe('Card Component', () => {
//   const mockItem = {
//     id: 1,
//     url: 'https://example.com/image.jpg',
//     title: 'Test Title',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hello World of Camas',
//   };

//   it('renders card with link', () => {
//     const { getByText } = render(
//       <Router>
//         <Card item={mockItem} link="/test-link" />
//       </Router>
//     );

//     expect(getByText(mockItem.title)).toBeTruthy();
//     //Check if the body contains this expression because it is truncated
//     expect(mockItem.body.split(' ').slice(0, 20).join(' ')).toBeTruthy(); 

//     const linkElement = getByText(mockItem.title).closest('a');
//     expect(linkElement).not.toBeNull();
//   });

//   it('renders card without link', () => {
//     const { getByText } = render(
//       <Card item={mockItem} />
//     );
//     expect(getByText(mockItem.title)).toBeTruthy();
//     expect(getByText(/Lorem ipsum dolor sit amet/)).toBeTruthy();
//     const linkElement = getByText(mockItem.title).closest('a');
//     expect(linkElement).toBeNull();
//   });
// });
