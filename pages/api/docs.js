export default function handler(req,res) 
{
    res.status(200).json({docs:['React', 'Godot']})
}