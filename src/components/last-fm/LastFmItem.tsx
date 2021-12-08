import { LastFmTrack } from '@/types/entities';
import { PlayIcon } from '@heroicons/react/solid';
import Image from 'next/image';

interface Props {
  track: LastFmTrack;
}

const LastFmItem: React.FC<Props> = ({ track }) => (
  <div className="flex flex-col h-full p-2 bg-white rounded shadow min-h-36 dark:bg-card">
    <a
      href="https://last.fm/user/RajceP"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex flex-row space-x-2">
        <div className="w-32 h-32 rounded shadow">
          <Image
            className="rounded"
            src={track.image[2]['#text']}
            alt="Album art"
            layout="fixed"
            width={128}
            height={128}
            placeholder="blur"
            blurDataURL={track.image[0]['#text']}
          />
        </div>
        <div className="flex flex-col min-h-full">
          <h3 className="text-lg font-semibold dark:text-gray-100">
            {track.name}
          </h3>
          <div className="flex flex-1"></div>
          <p className="text-gray-500 dark:text-gray-400">
            {track.artist['#text']}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {track.album['#text']}
          </p>
        </div>
        {track['@attr']?.nowplaying && (
          <span className="flex justify-end flex-grow w-12 h-12 text-red-600 items-top motion-safe:animate-pulse">
            <PlayIcon />
          </span>
        )}
      </div>
    </a>
  </div>
);

export default LastFmItem;