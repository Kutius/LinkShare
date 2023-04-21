export interface ILink {
  href: string
  title: string
}

const links = ref<ILink[]>([])

export function useLinks() {
  function addLink(link: ILink) {
    links.value.push(link)
  }

  function clearLinks() {
    links.value = []
  }

  function setLinks(newLinks: ILink[]) {
    links.value = newLinks
  }

  return {
    links,
    addLink,
    clearLinks,
    setLinks,
  }
}

export function parsedLinkTitle(link: string) {
  const isUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    .test(link)
  if (!isUrl)
    return

  const a = document.createElement('a')
  a.href = link
  const title = a.hostname
  return title
}
