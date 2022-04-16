import * as React from 'react';
import { Link } from 'office-ui-fabric-react';
import { ITestRootwebProps } from './ITestRootwebProps';
import { RootProvider } from './providers/RootProvider';


export default function TestRootweb (props:ITestRootwebProps) {

    const { description } = props;
    const [title, setTitle] = React.useState<String>("");

    const loadData = async ()=>{
      const provider = new RootProvider();
      const _title = await provider.getRootTitle();
      setTitle(_title);
    }

    React.useEffect(()=>{
      loadData();
    },[]);

    return (
      <div>
        <h2>Site Title</h2>
        <div>{title}</div>
        <div><Link href={description}>a link</Link></div>
      </div>
    );

}
