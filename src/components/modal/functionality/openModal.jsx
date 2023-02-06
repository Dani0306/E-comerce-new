import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

export const openModal = (component, Children) => {

    const Modal = lazy(() => import(`./${component}.jsx`))
    const modalDiv = document.createElement("div");
    modalDiv.id = 'modal';
    modalDiv.classList.add("modalContainer");

    document.querySelector("nav").appendChild(modalDiv)
    const root = createRoot(modalDiv);

    root.render(
        <Provider store={store}>
            <Suspense fallback={<div>Loading ...</div>}>
                <Modal root={root}>
                    <Children />
                </Modal>
            </Suspense>
        </Provider>
    )
}

export default openModal