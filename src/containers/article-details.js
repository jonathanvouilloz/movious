import Link from 'next/link'
import moment from 'moment'

const ArticleDetails = ({data}) => {

    const myMomentObject = moment(data.date, 'YYYY-MM-DD')
    const month = myMomentObject.locale('fr').format("DD MMMM YYYY");

    console.log(data);
    return (
        <section className="container px-8 pt-2 pb-6 mx-auto space-y-12 bg-secondary rounded-3xl">
      <Link href="/">
        <a className="-ml-2 text-lg hover:underline">Retour</a>
      </Link>
      <div className="grid w-auto grid-cols-2 pb-2 mx-auto mb-6 border-lightGrey border-b-1 md:w-1/2">
        <h2 className="">
            Par <span className="font-bold">{data.title}</span>
        </h2>
        <h2 className="text-right">
            Ecrit le <span>{month}</span>
        </h2>
      </div>
      <div className="w-auto pb-2 mx-auto space-y-6 md:w-1/2">
          <h2 className="text-4xl text-center">{data.title}</h2>
          <div className="">
          {data.description}
          </div>
        </div>
        <div className="w-40 mx-auto text-center border-t-1 border-lightGrey">
          <Link href="/">
        <a className="text-lg hover:underline">Retour aux articles</a>
      </Link>
          </div>
    </section>
    )
}

export default ArticleDetails