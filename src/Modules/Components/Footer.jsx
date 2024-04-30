import React from 'react';
import '../Styles/routing.css'
import { Link } from 'react-router-dom';
import w_logo from '../Services/Assets/udemy-white.svg';

const Footer = () => {
  return (
    <footer className='text-white pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <a className="nav-link" aria-current="page" target='_blank' rel="noreferrer" href="https://business.udemy.com/?locale=en_US&mx_pg=httpcachecontextsme-list&ref=footer&user_type=visitor&utm_type=mx" >Udemy Bussiness</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">Teach on Udemy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">Get the app</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">Contact us</Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link" aria-current="page" to="#" >Carrers</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" target='_blank' rel="noreferrer" href="https://blog.udemy.com/">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" target='_blank' rel="noreferrer" href="https://support.udemy.com/hc/en-us">Help and Support</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">Affliate</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" target='_blank' rel="noreferrer" href="https://investors.udemy.com/">Investors</a>
                                </li>

                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link" aria-current="page" to="#" >Terms</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">Privacy policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">Cookie settings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">Sitemap</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" target='_blank' rel="noreferrer" href="https://about.udemy.com/accessibility-statement/?locale=en-us">Accessibility</a>
                                </li>

                            </ul>
                        </div>
                        <div className='col-sm-3 text-end'>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-log" type="submit" to='#' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp; English</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row pt-5 pb-3'>
                        <div className='col text-start'>
                            <Link className="navbar-brand" to="/"><img src={w_logo} alt="Udemy" /></Link>
                        </div>
                        <div className='col text-end'>
                                    <Link className="nav-link" aria-current="page" to="#" >© 2024 Lotus, Inc.</Link>
                        </div>
                    </div>
                </div>
            </footer>
  )
}

export default Footer