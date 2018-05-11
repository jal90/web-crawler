const testData = require('./test-data')

const crawlWeb = function(internetObject) {
  // Check that argument is a JS object
  if (typeof internetObject === 'object') {
    const foundPages = [], skippedPages = [], notFoundPages = []
    const pagesArray = internetObject.pages

    // The web crawler always 'finds' the first page, so it's pushed to foundPages
    foundPages.push(pagesArray[0])

    // Iterate through foundPages array, and in turn iterate through each page's
    // links. If a link links to a new page, append it to foundPages, so that the
    // crawler crawl that page on a subsequent interation. Otherwise place links in
    // skippedPages or notFoundPages.
    for (let i = 0; i < foundPages.length; i++) {
      foundPages[i].links.forEach(link => {
        let inPages = false

        pagesArray.forEach(page => {
          if (link === page.address) {
            inPages = true
            if (!foundPages.includes(page)) {
              foundPages.push(page)
            } else if (!skippedPages.includes(link)) {
              skippedPages.push(link)
            }
          }
        })

        if (inPages === false) {
          notFoundPages.push(link)
        }
      })
    }

    // Format output to list pages visited, skipped, and not found
    return `Success: ${foundPages.map(page => page.address)} \nSkipped: ${skippedPages} \nError: ${notFoundPages}`
  }
  return 'crawlWeb must be passed an object'
}

console.log(`Testing first set: \n${crawlWeb(testData[0])} \nTesting second set: \n${crawlWeb(testData[1])} \nTesting error: \n${crawlWeb(42)}`)
