import { render } from '@testing-library/react';
import Home from '../app/page';
import PokemonListWithSearch from '@/components/PokemonListWithSearch';

// Mock the PokemonListWithSearch component
jest.mock('@/components/PokemonListWithSearch', () => () => <div>Mocked PokemonListWithSearch</div>);

describe('Home', () => {
  it('renders PokemonListWithSearch component', () => {
    const { getByText } = render(<Home />);
  });
});
