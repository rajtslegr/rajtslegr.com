import { useState } from 'react';

import { PlayIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import Image from 'next/image';

import { LastFmTrack } from '@/types/entities';

interface LastFmItemProps {
  track: LastFmTrack;
}

const LastFmItem: React.FC<LastFmItemProps> = ({ track }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white p-2 shadow dark:bg-card">
      <a href={track.url} rel="noopener noreferrer" target="_blank">
        <div className="flex flex-row space-x-2">
          <div
            className={clsx(
              'h-32 w-32 rounded-lg shadow',
              !isLoaded &&
                'rounded-lg bg-gray-200 shadow motion-safe:animate-pulse dark:bg-gray-700',
            )}
          >
            <Image
              className="rounded-lg"
              src={track.image[2]['#text']}
              alt="Album art"
              layout="fixed"
              width={128}
              height={128}
              placeholder="blur"
              blurDataURL={track.image[0]['#text']}
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </div>
          <div className="flex min-h-full flex-col overflow-hidden">
            <h3
              className="truncate text-lg font-semibold dark:text-gray-100"
              title={track.name}
            >
              {track.name}
            </h3>
            <div className="flex flex-1"></div>
            <p
              className="truncate text-gray-500 dark:text-gray-400"
              title={track.artist['#text']}
            >
              {track.artist['#text']}
            </p>
            <p
              className="truncate text-gray-500 dark:text-gray-400"
              title={track.album['#text']}
            >
              {track.album['#text']}
            </p>
          </div>
          {track['@attr']?.nowplaying && (
            <span className="flex h-12 w-12 grow justify-end text-red-600 motion-safe:animate-pulse">
              <PlayIcon />
            </span>
          )}
        </div>
      </a>
    </div>
  );
};

export default LastFmItem;
