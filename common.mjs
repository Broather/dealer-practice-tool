export function add_element(parent, child_type, text = null, attributes = null, namespace = null) {
    let child;
    if (namespace != null) {
        child = document.createElementNS(namespace, child_type)
    } else {
        child = document.createElement(child_type)
    }
    if (attributes != null) {
        for (const key in attributes) {
            child.setAttribute(key, attributes[key])
        }
    }
    if (text != null) {
        child.textContent = text
    }
    parent.appendChild(child)

    return child
}

export function remove_children(parent, type) {
    const children = parent.querySelectorAll(type);
    children.forEach(child => parent.removeChild(child));
}