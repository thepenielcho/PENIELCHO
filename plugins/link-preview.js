import 'isomorphic-fetch'

export default ({ app }, inject) => {
  const cache = new Map()

  const getLinkPreview = async (url) => {
    if (cache.has(url)) {
      return cache.get(url)
    }

    try {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      const html = data.contents

      const getMetaContent = (name) => {
        const match = html.match(new RegExp(`<meta(?:.*?)(?:name|property)=["']${name}["'](?:.*?)content=["'](.*?)["']`, 'i'))
        return match ? match[1] : ''
      }

      const preview = {
        title: getMetaContent('og:title') || html.match(/<title>(.*?)<\/title>/i)?.[1] || url,
        description: getMetaContent('og:description') || getMetaContent('description') || '',
        image: getMetaContent('og:image') || '',
        url: url
      }

      cache.set(url, preview)
      return preview
    } catch (error) {
      console.error(`Error fetching link preview for ${url}:`, error)
      return {
        title: url,
        description: 'Preview not available',
        image: '',
        url: url
      }
    }
  }

  inject('getLinkPreview', getLinkPreview)
}