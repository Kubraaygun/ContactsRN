const convertFullName = (name, surname) => {
  return `${name} ${surname}`;
};

function getInitials(name) {
  const names = name.trim().split('');

  const initials = names.map(name => name[0].toUpperCase());

  return initials.join('');
}
export {convertFullName};
