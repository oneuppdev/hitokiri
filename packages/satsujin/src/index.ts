function greeting(name?: string): string {
  return `Hello, ${name || 'World'}`;
}

export default greeting;
