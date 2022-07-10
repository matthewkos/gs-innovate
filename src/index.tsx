import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import Proposal from "./page/Proposal";
import Layout from "./page/Layout";
import NewProposal from './page/NewProposal';
import SimilarProject from "./page/SimilarProject";
import MoreDetails from "./page/MoreDetails";
import PastProjects from "./page/PastProjects";
import MyProjects from "./page/MyProjects";
import MyProjectDetails from "./page/MyProjectDetails";
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              {/*<Route path="/" element={<App />} />*/}
              <Route path="/" element={<Layout />}>
                  <Route path="myprojects" element={<MyProjects />} />
                  <Route path="details" element={<MyProjectDetails />} />

                  <Route path="ideahub" element={<MainPage />} />

                  <Route path="proposal" element={<Proposal />} />
                  <Route path="proposal/similarproject" element={<SimilarProject />} />
                  <Route path="new_proposal" element={<NewProposal/>} />
                  <Route path="proposal/moredetail" element={<MoreDetails />} />

                  <Route path="pastprojects" element={<PastProjects />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
