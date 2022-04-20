import { useCallback, useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { deserializeFromHtml } from "../../../CreatePost/deserializer";
import { Element, Leaf } from "../../../CreatePost/renderHelper";
import "./PostCredential.css";

interface PostCredentialProps {
    id: string;
    post: string;
}

export default function(props: PostCredentialProps) {
    console.log("i am in postcredential");
    console.log("post: ", props.post);
    const initialValue: Descendant[] = deserializeFromHtml(props.post);
    console.log("initialValue: ", initialValue);
    const editor = useMemo(() => withReact(createEditor()), []);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    return <div className="PostCredential">
        <Slate 
            editor={editor} 
            value={initialValue}
        >
            <Editable 
                readOnly           
                renderElement={renderElement}
                renderLeaf={renderLeaf}
            />
        </Slate>
    </div>
}