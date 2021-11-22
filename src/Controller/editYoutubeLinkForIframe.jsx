/* 
params - должен состоять из объектов. В объектах 2 значения current и need
    current - что найти и земенить (String)
    need - на что заменить current (String)
*/

const editYoutubeLinkForIframe = (
  link,
  action,
  params = [
    { current: "watch?v=", need: "embed/" },
    { current: "youtube", need: "youtube-nocookie" },
  ]
) => {
  let currentLink = link;

  if (link) {
    params.forEach((i) => {
      currentLink = currentLink.replace(i.current, i.need);
    });
    action(currentLink);
  } else {
    action(null);
  }
};

export default editYoutubeLinkForIframe;
