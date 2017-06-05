import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin:0;
    padding:0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  .Links hr {
    border: 0.3px solid saddlebrown;
    margin: 10px auto;
    width: 75%;
    max-width: 450px;
  }
  hr {
    height: 0;
    overflow: visible;
    width: 95%;
}
.Categories hr {
  display: none;
}

  nav a {
  	margin-left: .5em;
  	margin-right: .5em;
  	font-weight: bold;
  	text-decoration: none;
  }
  nav a:hover {
    color: wheat !important;
  }
  a.anchor {
    color: #6F4E37;
    font-size: 20px;
}
a.anchor:hover {
  color: darkred;
}
a.top {
  font-size: 16px;
  text-decoration: none;
  color: wheat;
}
a.top:hover {
color: #6F4E37;
}
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
