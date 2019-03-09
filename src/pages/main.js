import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from '../components/Modal';
import Mapa from '../components/Mapa';
import DeveloperList from '../components/DeveloperList';

const Main = () => (
  <Fragment>
    <ToastContainer />
    <Modal />
    <DeveloperList />
    <Mapa />
  </Fragment>
);

export default Main;
