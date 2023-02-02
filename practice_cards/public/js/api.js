export const getLectionLength = () => fetch('/tickets')
  .then(res => res.json());

export const getTickets = (id) => fetch(`/tickets/${id}`)
  .then(res => res.json());