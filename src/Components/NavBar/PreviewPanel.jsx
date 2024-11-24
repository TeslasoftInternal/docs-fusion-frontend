import React, {useEffect, useState} from 'react';

function PreviewPanel({file}) {
    const [fileURL, setFileURL] = useState(null);

    useEffect(() => {
        try {
            // Create an object URL when the file changes
            if (file !== undefined && file != null) {
                const url = URL.createObjectURL(file[0]);
                setFileURL(url);

                // Cleanup the object URL when the component unmounts or the file changes
                return () => {
                    URL.revokeObjectURL(url);
                };
            }
        } catch (e) {
            console.error(e);
        }
    }, [file]);

    return (
        <div className={"preview-panel"}>
            {
                !fileURL ? <div className={"no-preview"} style={{
                        color: "white",
                    }}>No preview available</div> :
                    <iframe src={fileURL} title={"Preview"} className={"preview-iframe"}/>
            }
        </div>
    );
}

export default PreviewPanel;