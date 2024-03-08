export default function LayoutAbout ({children}){

return (
    <>
    <h1>This Layout Will Be Available In All The About Component No Matter How Depth Your Component Are In About Folder</h1>
    
     <div>
        
     {children}
        
        </div> 
    </>
)

};