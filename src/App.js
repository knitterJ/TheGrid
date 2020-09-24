import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {

    headers: ["Gender", "Quota Set", "Quota Answered SQ17 (Contact)", "Actual Answered SQ17 (Contact)", "Remained Answered SQ17 (Contact)", "%", "%Diff", "Long Completes"],

    c: [],

    //temp mock-up set 
    "gm": {
      "cauc": [
        { "Male": 0.5 },
        { "Female": 0.5 },
        { "21-24": 0.09 },
        { "25-29": 0.11 },
        { "30-34": 0.1 },
        { "35-44": 0.22 },
        { "45-55": 0.27 },
        { "56-65": 0.21 },
        { "21-24  (Male)": 0.498414123424531 },
        { "25-29 (Male)": 0.498414123424531 },
        { "30-34 (Male)": 0.498414123424531 },
        { "35-44 (Male)": 0.498414123424531 },
        { "45-55 (Male)": 0.498414123424531 },
        { "56-65 (Male)": 0.498414123424531 },
        { "21- 24 (Female)": 0.501585876575469 },
        { "25 - 29 (Female)": 0.501585876575469 },
        { "30 - 34 (Female)": 0.501585876575469 },
        { "35 - 44 (Female)": 0.501585876575469 },
        { "45 - 55 (Female)": 0.501585876575469 },
        { "56 - 65 (Female)": 0.501585876575469 },
        { "HS or less (always boost)": 0.38 },
        { "Some College +": 0.62 },
        { "New England": 0.0548808393762732 },
        { "Middle Atlantic": 0.137426362901464 },
        { "East North Central": 0.162213552306667 },
        { "West North Central": 0.0768579335638448 },
        { "South Atlantic": 0.17430389934054 },
        { "East South Central": 0.0601811475376604 },
        { "West South Central": 0.0983772196633403 },
        { "Mountain": 0.0742161224267624 },
        { "Pacific": 0.161542922883448 }
      ],
      "hisp": [
        { "Male": 0.511629164769203 },
        { "Female": 0.488370835230797 },
        { "21-24": 0.12 },
        { "25-29": 0.15 },
        { "30-34": 0.15 },
        { "35-44": 0.26 },
        { "45-55": 0.21 },
        { "56-65": 0.11 },
        { "21-24  (Male)": 0.511629164769203 },
        { "25-29 (Male)": 0.511629164769203 },
        { "30-34 (Male)": 0.511629164769203 },
        { "35-44 (Male)": 0.511629164769203 },
        { "45-55 (Male)": 0.511629164769203 },
        { "56-65 (Male)": 0.511629164769203 },
        { "21 - 24 (Female)": 0.488370835230797 },
        { "25 - 29 (Female)": 0.488370835230797 },
        { "30 - 34 (Female)": 0.488370835230797 },
        { "35 - 44 (Female)": 0.488370835230797 },
        { "45 - 55 (Female)": 0.488370835230797 },
        { "56 - 65 (Female)": 0.488370835230797 },
        { "HS or less (always boost)": 0.63 },
        { "Some College +": 0.37 },
        { "New England": 0.03 },
        { "Middle Atlantic": 0.12 },
        { "East North Central": 0.07 },
        { "West North Central": 0.02 },
        { "South Atlantic": 0.16 },
        { "East South Central": 0.01 },
        { "West South Central": 0.2 },
        { "Mountain": 0.1 },
        { "Pacific": 0.3 },
        { "Mexican": 0.638241555042742 },
        { "Non-Mexican": 0.361758444957258 },
        { "Born in US": 0.499580874258138 },
        { "Outside in US": 0.500419125741862 },
        { "English": 0.9 },
        { "Spanish": 0.1 }
      ],
      "afam": [
        { "Male": 0.47 },
        { "Female": 0.53 },
        { "21-24": 0.11 },
        { "25-29": 0.12 },
        { "30-34": 0.12 },
        { "35-44": 0.23 },
        { "45-55": 0.26 },
        { "56-65": 0.16 },
        { "21-24  (Male)": 0.471713708574719 },
        { "25-29 (Male)": 0.471713708574719 },
        { "30-34 (Male)": 0.471713708574719 },
        { "35-44 (Male)": 0.471713708574719 },
        { "45-55 (Male)": 0.471713708574719 },
        { "56-65 (Male)": 0.471713708574719 },
        { "21 - 24 (Female)": 0.528286291425281 },
        { "25 - 29 (Female)": 0.528286291425281 },
        { "30 - 34 (Female)": 0.528286291425281 },
        { "35 - 44 (Female)": 0.528286291425281 },
        { "45 - 55 (Female)": 0.528286291425281 },
        { "56 - 65 (Female)": 0.528286291425281 },
        { "HS or less (always boost)": 0.48 },
        { "Some College +": 0.52 },
        { "New England": 0.023749216422932 },
        { "Middle Atlantic": 0.144311393839919 },
        { "East North Central": 0.138012176653249 },
        { "West North Central": 0.0332472443214319 },
        { "South Atlantic": 0.342192295952647 },
        { "East South Central": 0.0951892996028383 },
        { "West South Central": 0.133602170028533 },
        { "Mountain": 0.0205938105753963 },
        { "Pacific": 0.0691023926030546 }
      ]
    },
    "lda": {
      "cauc": [
        { "Male": 0.51 },
        { "Female": 0.49 },
        { "21-24": 0.29 },
        { "25-29": 0.36 },
        { "30-34": 0.34 },
        { "35-44": 0 },
        { "45-55": 0 },
        { "56-65": 0 },
        { "21-24  (Male)": 0.5077998362456 },
        { "25-29 (Male)": 0.5077998362456 },
        { "30-34 (Male)": 0.5077998362456 },
        { "35-44 (Male)": 0 },
        { "45-55 (Male)": 0 },
        { "56-65 (Male)": 0 },
        { "21- 24 (Female)": 0.4922001637544 },
        { "25 - 29 (Female)": 0.4922001637544 },
        { "30 - 34 (Female)": 0.4922001637544 },
        { "35 - 44 (Female)": 0 },
        { "45 - 55 (Female)": 0 },
        { "56 - 65 (Female)": 0 },
        { "HS or less (always boost)": 0.32 },
        { "Some College +": 0.68 },
        { "New England": 0.0513337922315745 },
        { "Middle Atlantic": 0.135562046207956 },
        { "East North Central": 0.158202365464491 },
        { "West North Central": 0.0787931200228039 },
        { "South Atlantic": 0.168116762789007 },
        { "East South Central": 0.0588730990807697 },
        { "West South Central": 0.101858169059188 },
        { "Mountain": 0.0782970265548114 },
        { "Pacific": 0.168963618589399 }
      ],
      "hisp": [
        { "Male": 0.53 },
        { "Female": 0.47 },
        { "21-24": 0.29 },
        { "25-29": 0.36 },
        { "30-34": 0.35 },
        { "35-44": 0 },
        { "45-55": 0 },
        { "56-65": 0 },
        { "21-24  (Male)": 0.53 },
        { "25-29 (Male)": 0.53 },
        { "30-34 (Male)": 0.53 },
        { "35-44 (Male)": 0 },
        { "45-55 (Male)": 0 },
        { "56-65 (Male)": 0 },
        { "21 - 24 (Female)": 0.47 },
        { "25 - 29 (Female)": 0.47 },
        { "30 - 34 (Female)": 0.47 },
        { "35 - 44 (Female)": 0 },
        { "45 - 55 (Female)": 0 },
        { "56 - 65 (Female)": 0 },
        { "HS or less (always boost)": 0.57 },
        { "Some College +": 0.43 },
        { "New England": 0.0279994361517251 },
        { "Middle Atlantic": 0.115560499125359 },
        { "East North Central": 0.0700136911359826 },
        { "West North Central": 0.0231758903627198 },
        { "South Atlantic": 0.149217777553533 },
        { "East South Central": 0.0158660838240565 },
        { "West South Central": 0.196642264667467 },
        { "Mountain": 0.0992482358935201 },
        { "Pacific": 0.302276121285636 },
        { "Mexican": 0.667167435704832 },
        { "Non-Mexican": 0.332832564295168 },
        { "Born in US": 0.63 },
        { "Outside in US": 0.37 },
        { "English": 0.9 },
        { "Spanish": 0.1 }
      ],
      "afam": [
        { "Male": 0.48 },
        { "Female": 0.52 },
        { "21-24": 0.31 },
        { "25-29": 0.36 },
        { "30-34": 0.34 },
        { "35-44": 0 },
        { "45-55": 0 },
        { "56-65": 0 },
        { "21-24  (Male)": 0.517741538746046 },
        { "25-29 (Male)": 0.517741538746046 },
        { "30-34 (Male)": 0.517741538746046 },
        { "35-44 (Male)": 0 },
        { "45-55 (Male)": 0 },
        { "56-65 (Male)": 0 },
        { "21 - 24 (Female)": 0.482258461253954 },
        { "25 - 29 (Female)": 0.482258461253954 },
        { "30 - 34 (Female)": 0.482258461253954 },
        { "35 - 44 (Female)": 0 },
        { "45 - 55 (Female)": 0 },
        { "56 - 65 (Female)": 0, "lakfwej": 3 },
        { "HS or less (always boost)": 0.42 },
        { "Some College +": 0.58 },
        { "New England": 0.0249350558830551 },
        { "Middle Atlantic": 0.14149859299998 },
        { "East North Central": 0.136160891063218 },
        { "West North Central": 0.0364848488470958 },
        { "South Atlantic": 0.336561567572369 },
        { "East South Central": 0.0964324394882019 },
        { "West South Central": 0.137758049019101 },
        { "Mountain": 0.0219436715077326 },
        { "Pacific": 0.0682248836192459 }
      ]
    }
  }

  componentDidMount() {
    this.keysToArray()
  }

  renderHeader = (header) => {
    return header.map(one => <th>{one}</th>)
  }

  keysToArray = () => {
    let oneArrayKeys = Object.keys(this.state.gm.cauc.reduce(function (result, current) {
      return Object.assign(result, current);
    }, {}));
    this.setState({ c: oneArrayKeys })
  }

  //to make: renderEachRow
  renderRow = () => {
    let singleR = this.state.c.map((element, index) => {
      return (
        <tr key={index}>{element}</tr>
      )
    })
    return singleR;
  }

  render() {

    return (
      <React.Fragment>
        <div>
          <table id='gen_first'>
            <thead id='header'>
              {this.renderHeader(this.state.headers)}
            </thead>
            <tbody>
              {this.renderRow()}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
