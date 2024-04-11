import {NavLink, Outlet} from 'react-router-dom'
import {Suspense} from 'react';
import Loader from '../Loader/Loader';
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai';
import css from './SharedLayout.module.css'


export function SharedLayout() {
  return (
    <>
      <div className={css.flexmenu}>
        <NavLink className={css.linkmenu} to={'/'}>
          <AiFillHome/>
        </NavLink>
        <NavLink className={css.linkmenu} to={'movies'}>
          <AiOutlineSearch/>
        </NavLink>
      </div>
      <main>
        <section>
          <Suspense fallback={<Loader/>}>
            <Outlet/>
          </Suspense>
        </section>
      </main>
    </>
  );
}