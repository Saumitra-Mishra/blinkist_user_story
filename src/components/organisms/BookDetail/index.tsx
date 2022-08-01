import { Grid, Typography } from "@mui/material"
import BookDetailThumbnail from "../../atoms/BookDetailThumbnail/indec"


const BookDetail = ({BookName,Tagline,Authors}: any) => {
    return <div>
        <Grid>
            <Grid item>
                <Typography>{BookName}</Typography>
                <Typography>{Tagline}</Typography>
                <Typography>{Authors}</Typography>
            </Grid>
            {/* API DATA */}
            <Grid item>
                <BookDetailThumbnail></BookDetailThumbnail>
            </Grid>
        </Grid>
    </div>
}

export default BookDetail