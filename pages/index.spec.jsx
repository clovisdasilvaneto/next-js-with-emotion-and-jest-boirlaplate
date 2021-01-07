import {render} from 'config/jest/test-utils';
import Home from './index';

describe('Hom Component', () => {
  it('Should render the defualt layout', () => {
    const {getByText, container} = render(<Home />);
    const text = getByText(/^Hey/);

    expect(text).toBeInTheDocument();
    expect(container.innerHTML).toMatchSnapshot();
  });
});
