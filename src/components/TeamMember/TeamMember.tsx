import classes from './TeamMember.module.css'

type TeamMemberProps = {
    id: number
    image: string
    chefName: string
    chefPos: string
    description: string
}

const TeamMember = ({ id, image, chefName, chefPos, description }: TeamMemberProps) => {
    return (
        <div className={classes.team_member}>
            <div><img src={image} alt={`teamMember${id}`} /></div>
            <h6 className={classes.team_member_name}>{chefName}</h6>
            <p className={classes.team_member_pos}>{chefPos}</p>
            <p className={classes.team_member_desc}>{description}</p>
        </div>
    )
}

export default TeamMember