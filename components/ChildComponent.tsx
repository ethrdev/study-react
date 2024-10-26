
// Die ChildComponent enthält die Nachricht über die props und zeigt sie an
export default function ChildComponent({ message }: { message: string }) {
    return (
        <div>{message}</div>
    )
}