const convertFullName = (name, surname) => {
  return `${name} ${surname}`;
};

function getInitials(name) {
  const names = fulName.trim().split('');

  const initials = names.map(name => name[0].toUpperCase());

  return initials.join('');
}
export {convertFullName};
