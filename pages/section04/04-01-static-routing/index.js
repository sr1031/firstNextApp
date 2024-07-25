import { useRouter } from "next/router";

export default function StaticRoutingPage() {

    const router = useRouter();
    
    const onClick25712 = () => {
        router.push("/section04/04-01-static-routing/moved/25712");
    }

    const onClick25715 = () => {
        router.push("/section04/04-01-static-routing/moved/25715");
    }

    const onClick25723 = () => {
        router.push("/section04/04-01-static-routing/moved/25723");
    }
    
    return (<>
        <button onClick={onClick25712}>25712번 게시물이동</button>
        <button onClick={onClick25715}>25715번 게시물이동</button>
        <button onClick={onClick25723}>25723번 게시물이동</button>
    </>)
}