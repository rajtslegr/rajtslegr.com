/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Instagram, { Props } from '@/components/instagram/Instagram';
import { render } from '@/test/test-utils';

jest.mock('next/image', () => ({ alt }: { alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="https://www.instagram.com/" alt={alt} />
));

describe('Instagram', () => {
  let expectedProps: Props;

  beforeEach(() => {
    expectedProps = {
      data: {
        data: [
          {
            caption: '#instagram',
            id: '1',
            thumbnail_url: undefined!,
            media_url: 'https://www.instagram.com/',
            permalink: 'https://www.instagram.com/',
          },
        ],
      },
    };
  });

  it('should render instagram image', () => {
    render(<Instagram data={expectedProps.data} />);

    const image = screen.getByAltText('#instagram');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://www.instagram.com/');
  });

  it('should use thumbnail_url if media_url is not present', () => {
    expectedProps.data!.data[0].media_url = undefined!;
    expectedProps.data!.data[0].thumbnail_url = 'https://www.instagram.com/';

    render(<Instagram data={expectedProps.data} />);

    const image = screen.getByAltText('#instagram');
    expect(image).toHaveAttribute('src', 'https://www.instagram.com/');
  });

  it('should render only 9 image elements', () => {
    for (let i = 0; i < 12; i += 1) {
      expectedProps.data!.data[i] = {
        caption: '#instagram',
        id: (i + 1).toString(),
        thumbnail_url: undefined!,
        media_url: 'https://www.instagram.com/',
        permalink: 'https://www.instagram.com/',
      };
    }

    render(<Instagram data={expectedProps.data} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(9);
  });

  it('should render error message', () => {
    expectedProps.data! = undefined!;

    render(<Instagram data={expectedProps.data} />);

    const text = screen.getByText('Error fetching data from Instagram.');
    expect(text).toBeInTheDocument();
  });
});
