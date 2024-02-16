
export const getRollNumber = (position : number, page?: string | null) => {
    if(!page || parseInt(page) === 1 ) {
        return position + 1;
    }
    return ((parseInt(page) - 1) * 10) + position + 1
}