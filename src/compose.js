export default function compose(args) {
  return args.reduce((comp, fn) => x => fn(comp(x)));
}
