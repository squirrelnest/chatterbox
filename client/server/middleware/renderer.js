import React from 'react'
import ReactDOMServer from 'react-dom/server'
import createMemoryHistory from 'history/createMemoryHistory'
import { ConnectedRouter } from 'react-router-redux'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../../src/configureStore'
import routes from '../../src/routes'
import App from '../../src/App';

const path = require("path")
const fs = require("fs")
const history = createMemoryHistory()

export default (store) => (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
          console.error('err', err)
          return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
              <ConnectedRouter history={history} children={routes}>
                <App />
              </ConnectedRouter>
            </StaticRouter>
          </Provider>
        )

        // inject the rendered app into html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        )
    })
}
