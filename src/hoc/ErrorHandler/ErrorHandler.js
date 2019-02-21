import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import classes from './ErrorHandler.module.css';
// import Aux from '../Aux';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            // this.reqInterceptor = axios.interceptors.request.use(req => {
            //     this.setState({ error: null });
            // });

            // this.resInterceptor = axios.interceptors.response.use(res => {return res}, error => {
            //     console.log('entrou');
            //     this.setState({ error: error });
            // });

            this.resInterceptor = axios.interceptors.response.use((config) => {
                return config;
            }, (error) => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        closeError = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <div className={classes.ErrorHandler}>
                    <Modal
                        showModal={this.state.error}
                        modalClosed={this.closeError}>
                        <span className={classes.Error}>{this.state.error ? this.state.error.message : null}</span>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </div>

                // <div className={classes.ErrorHandler}>
                //     <Modal
                //         showModal={this.state.error}
                //         modalClosed={this.closeError}>
                //         <span>{this.state.error ? this.state.error.message : null}</span>
                //     </Modal>
                //     <WrappedComponent {...this.props} />
                // </div>
            );
        }
    }
}

export default errorHandler;