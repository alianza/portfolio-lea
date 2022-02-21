export default function triggerLoader(router) {
    router.push({ pathname: router.asPath }, undefined, { shallow: true })
}
