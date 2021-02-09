import React from 'react';

class ExcersicesForm extends React.Component {
    
    render() { 
        const { OnChange, OnSubmit, form } = this.props
        return (
            <div className='container'>
                <form onSubmit={OnSubmit}>
                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={OnChange}
                            value={form.title}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={OnChange}
                            value={form.description}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={OnChange}
                            value={form.img}
                        />
                    </div>
                    <div className='form-row'>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"
                                onChange={OnChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"
                                onChange={OnChange}
                                value={form.rightColor}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default ExcersicesForm;