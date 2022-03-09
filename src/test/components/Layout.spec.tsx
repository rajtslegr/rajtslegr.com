import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Layout from '@/components/layout/Layout';
import { render } from '@/test/test-utils';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Layout', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({
    push,
    pathname: '/',
  }));

  it('should have main element in structure', () => {
    render(
      <Layout>
        <p>Children Mock</p>
      </Layout>,
    );

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
