importScripts('idb-keyval.js');

onmessage = async (e) => {
  const list = await idbKeyval.get('beers');

  if (list === undefined) {
    await self.idbKeyval.set('beers', [e.data])
  } else {
    const parsedList = list;
    parsedList.push(e.data);

    await self.idbKeyval.set('beers', parsedList);
  }
}