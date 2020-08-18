import axios from 'axios';
import { useEffect, useState } from 'react';

interface TunesHooksFeed {
  author: {
    name: {
      label: string;
    };
    uri: {
      label: string;
    };
  };
  entry: [];
}

export const useItunes = () => {
  const [tunes, setTunes] = useState<TunesHooksFeed>(null);

  useEffect(() => {
    try {
      axios
        .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        .then((response) => setTunes(response.data?.feed));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { tunes };
};
