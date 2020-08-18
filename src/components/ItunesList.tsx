import { useItunes } from '@@Hooks/useItunes';
import get from 'lodash/get';
import React, { useState } from 'react';

export const ItunesList: React.FunctionComponent = () => {
  const { tunes } = useItunes();
  const [searchTerm, setSearchTerm] = useState(null);

  if (!tunes) {
    return null;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filterOnSearchTerm = (item: any) => {
    const result =
      get(item, "im:name.label")
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase()) ||
      get(item, "im:artist.label")
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase());

    return searchTerm ? result : true;
  };

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        className="w-full border border-grey py-2 px-2 mb-4"
        placeholder="Type to search"
      />
      {tunes.entry?.filter(filterOnSearchTerm).map((item: any, key: number) => (
        <div
          className="flex flex-row flex-wrap py-4 mb-4 border-b"
          key={get(item, "id.attributes.im:id")}
        >
          <img src={get(item, "im:image[0].label")} className="mr-4" />
          <div className="flex flex-col justif-center w-8/12">
            <div>
              <div className="font-semibold">
                {get(item, "im:artist.label")}
              </div>
              <div>{get(item, "im:name.label")}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
